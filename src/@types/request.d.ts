import { Customer } from "../app";

declare global {
  namespace Express {
    interface Request {
      customer?: Customer;
    }
  }
}
