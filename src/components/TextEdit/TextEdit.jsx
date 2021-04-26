function TextEdit(props) {
    
    const comment = () => {
        return <p>{props.comment}</p>
    }
    const textBox = () => {
        return <textarea>{props.comment}</textarea>
    }
    if( edit ){
        return comment;
    }
    else{
        return textBox;
    }

}


export default TextEdit;