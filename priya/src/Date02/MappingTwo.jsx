import { useState } from "react";
function MappingTwo() {
    const [studentsData, setStudentsData] = useState([{ name: "rani", age:34, Designation: "Teacher"}, { name:"geeta", age:23, Designation:"Engineer"}, { name:"Rutuja", age:22, Designation:"Docter"}, { name:"miina", age:19, Designation:"Student"}])
    console.log(studentsData, "studentsData")
    return(
        <div>
            <h1>Students List </h1>
            {studentsData.map((i) => (
                <div>
                    <h1>Name :{i.name}</h1>
                    <h2>Age :{i.age}</h2>
                    <h2>Designation :{i.Designation}</h2>
                    </div>
            ))}


</div>
    )
}
export default MappingTwo;