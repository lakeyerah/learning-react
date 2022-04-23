import './Bubbles.css';

export const Bubbles = props => {
    return (
        <div className='bubble' onClick={() => props.delete(props.statement)}>
           <p> {props.statement} </p>
        </div>
    );
}