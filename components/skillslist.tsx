import { Skill } from "@/models/skill"
    // something where the tags are generated
    // do we include interests? link them to marketplace items they might be interested in


const skillsList = [
    {name: 'Gardening', selected: false},
    {name: 'Cleaning', selected: false},
    {name: 'Cooking', selected: false},
    {name: 'Building', selected: false},
    {name: 'Mechanics', selected: false},
    {name: 'Crafts', selected: false},
    {name: 'Health', selected: false},
    {name: 'Fitness', selected: false},
    {name: 'Art', selected: false},
    {name: 'Music', selected: false},
    {name: 'Education', selected: false},
    {name: 'Tutoring', selected: false},
    {name: 'Food', selected: false},
    {name: 'Sport', selected: false},
    {name: 'Culture', selected: false},
    {name: 'Language',selected: false},
    {name: 'Other', selected: false},
]

export default function SkillsList() {
    let skills : Skill[] = []

    const toggleSkill = (skill: Skill) => {
        skills.push(skill)
        
    }
    // const handleSubmit = () => {
    //     alert(`You have selected: ${selectedSkills.join(', ')}`)
    // }
   
    return (
        <>
        <h2 className="card-title title-center">What skills you can bring to your NeighbourGood?</h2>
        <div className="flex flex-wrap gap-3 justify-center">
            {skillsList.map(skill => (
                <button
                    key={skill.name}
                    className={`px-4 py-2 border rounded-full ${skills.includes(skill) ? 'bg-blue-500 text-white' : 'bg-white text-black border gray-300'
                    }`}
                    onClick={() => toggleSkill(skill)}>
                        {skill.name}
                    </button>
            ))}
      
        </div>
        
        </>
    )
}

{/* <button className="mt-5 px-5 py-2 bg-blue-500 text-white rounded"
onClick={handleSubmit}>Submit</button> */}