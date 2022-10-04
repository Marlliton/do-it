import { v4 } from 'uuid';

export default class Id {
  
  static new() {
    return v4()
  }
}

