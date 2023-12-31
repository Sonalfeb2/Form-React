import Card from "./Card";
import Button from "./Button";
import classes from "./ErrorModule.css";
const ErrorModule = props => {
 
  return (
    <div>
        <div className={classes.backdrop}/>
    <Card className={classes.modal}>
      <header className={classes.header}>
        <h2>
          {props.title}
        </h2>
      </header>
      <div className={classes.content}>
        <p>
          {props.message}
        </p>
      </div>
      <footer className={classes.actions}>
        <Button onClick={props.closeModule}>Okay</Button>
      </footer>
    </Card>
    </div>
  );
};
export default ErrorModule;
