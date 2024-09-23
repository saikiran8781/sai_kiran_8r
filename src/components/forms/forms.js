
import"./App.css";

const Forms=()=>{
    return(
<div classname="container">
<form>
    <lable htmlfor="first name">first name*</lable>
    <input type="text" placeholder="enter your first name" name="name"></input>

    <lable htmlfor="last name">last name*</lable>
    <input type="text" placeholder="enter your last name" name="last name"></input>

    <lable htmlfor="email">email id*</lable>
    <input type="email" placeholder="enter your email id" name="email"></input>

    <lable htmlfor="gender">gender</lable>
    <input type="radio" name="gender"/>male
    <input type="radio" name="gender"/>female
    <input type="radio" name="gender"/>others

    <lable htmlfor="contact">contact</lable>
    <input type="contact" placeholder="enter your phone number" name="contact"></input>

    <lable htmlfor="subject" id="subject">languages known</lable>
    <section>
        <option value="english">english</option>
        <option value="telugu">telugu</option>
        <option value="hindi">hindi</option>
    </section>

    <lable htmlfor="resume">upload resume</lable>
    <input type="file" placeholder="select resume"name="resume"></input>

    <lable htmlfor="url">URL</lable>
    <input type="text" placeholder="enter image url" name="url"></input>

    <lable htmlfor="about">about</lable>
    <textarea name="about" id="about" col="30" row="10" placeholder="enter description"></textarea>

    <button type="button">reset</button>
    <button type="submit">submit</button>

</form>
</div>
    
        
    )
}
export default Forms