import { useState } from "react"

    // something where the tags are generated
    // do we include interests? link them to marketplace items they might be interested in


const skillsList = [
    'Gardening',
    'Cleaning',
    'Cooking',
    'Building',
    'Mechanics',
    'Crafts',
    'Health',
    'Fitness',
    'Art',
    'Music',
    'Education',
    'Tutoring',
    'Food',
    'Sport',
    'Culture',
    'Language',
    'Other'
]

export default function SkillsList() {
    const [selectedSkills, setSelectedSkills] = useState<string[]>([])

    const toggleSkill = (skill: string) => {
        setSelectedSkills(prev =>
            prev.includes(skill)
            ? prev.filter(item => item !== skill)
            : [...prev, skill]
        )
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
                    key={skill}
                    className={`px-4 py-2 border rounded-full ${selectedSkills.includes(skill) ? 'bg-blue-500 text-white' : 'bg-white text-black border gray-300'
                    }`}
                    onClick={() => toggleSkill(skill)}>
                        {skill}
                    </button>
            ))}
      
        </div>
        
        </>
    )
}

{/* <button className="mt-5 px-5 py-2 bg-blue-500 text-white rounded"
onClick={handleSubmit}>Submit</button> */}