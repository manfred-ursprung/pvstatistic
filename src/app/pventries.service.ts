import { Injectable } from '@angular/core';
import { Entry} from './Classes/Entry';

@Injectable()

export class PventriesService {

  entries: Array<Entry>;

    constructor() {
        this.entries = [];
    }

    public add(entry: Entry) {
        this.entries.push(entry);
    }

    public pop() {
        return this.entries.pop();
    }

    public getAll(): Array<Entry> {
      return this.entries;
    }


}
