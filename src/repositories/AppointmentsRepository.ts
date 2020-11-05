import { isEqual } from 'date-fns';

import Appointment from '../models/Appointment';

interface CreateAppointmentDTO {
  provider_id: string;
  date: Date;
}

class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public All(): Appointment[] {
    return this.appointments;
  }

  public findByDate(date: Date): Appointment | undefined {
    const findAppointment = this.appointments.find(appointment =>
      isEqual(date, appointment.date),
    );

    return findAppointment;
  }

  public create({ provider_id, date }: CreateAppointmentDTO): Appointment {
    const appointment = new Appointment({ provider_id, date });

    this.appointments.push(appointment);

    return appointment;
  }
}

export default AppointmentsRepository;
