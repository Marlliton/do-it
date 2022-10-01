import AuthService from "../core/auth/AuthSevice";
import FirebaseAuth from "./adapter/auth/FirebaseAuth";
import Services from "./Services";

const services = new Services(new AuthService(new FirebaseAuth()));

export { services };
