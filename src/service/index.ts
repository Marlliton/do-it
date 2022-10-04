import AuthService from "../core/auth/AuthSevice";
import FirebaseAuth from "./adapter/auth/FirebaseAuth";
import FirebaseDatabase from "./adapter/db/FirebaseDatabase";
import Services from "./Services";

const services = new Services({
  auth: new FirebaseAuth(),
  database: new FirebaseDatabase(),
});



export { services };
