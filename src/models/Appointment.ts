import { uuid } from 'uuidv4';

class Appointment {
  id: string;

  provider_id: string;

  date: Date;

  constructor({ provider_id, date }: Omit<Appointment, 'id'>) {
    this.id = uuid();
    this.provider_id = provider_id;
    this.date = date;
  }
}

export default Appointment;
