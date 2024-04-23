import React, { useState } from 'react'

interface FormViewProps {}

const FormView: React.FC<FormViewProps> = () => {
  // const [name, setName] = useState('')
  // const [description, setDescription] = useState('')
  // const [targetAmount, setTargetAmount] = useState('')
  // const [members, setMembers] = useState('')
  const [showForm, setShowForm] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleFormView = () => {
    setShowForm(true)
    setSubmitted(false)
  }

  return (
    // grid border-stroke dark:border-strokedark
    <div className="flex items-center justify-between mx-auto">
      {!showForm && !submitted && (
        <button className="btn " onClick={handleFormView}>
          View Form
        </button>
      )}
      {!showForm && !submitted && (
        <div className="flex justify-center items-center h-screen container mx-auto">
          <div className=" shadow-md rounded p-28 mb-4 bg-cyan-100">
            <h2 className="text-2xl font-bold mb-4 py-5 px-20">Submitted Details</h2>
            <p className="text-gray-700 mb-2">Name: Kilifi Vacation</p>
            <p className="text-gray-700 mb-2">Description: A one week vacation in the beaches of Kilifi</p>
            <p className="text-gray-700 mb-2">Target Amount: 100,000 ksh</p>
            <p className="text-gray-700 mb-2">
              Members: X7NG5FBK3N2IXKJNG4J33XYVOFMS3HCJ7XVYXH72PC6ZGB624H32JPJVR4<br></br>
              VS2KP4GYLD5GMEXQ6WGH4UXFI6IKOSPPLGYMDHMR7JQCJ7ZAYUHVXHKFIU<br></br>
            </p>
          </div>
          <br></br>
          <div className=" shadow-md rounded p-28 mb-4 bg-cyan-100">
            <h2 className="text-2xl font-bold mb-4 py-5 px-20">Submitted Details</h2>
            <p className="text-gray-700 mb-2">Name: Birthday</p>
            <p className="text-gray-700 mb-2">Description: Noelas Birthday</p>
            <p className="text-gray-700 mb-2">Target Amount: 50,000 ksh</p>
            <p className="text-gray-700 mb-2">
              Members: X7NG5FBK3N2IXKJNG4J33XYVOFMS3HCJ7XVYXH72PC6ZGB624H32JPJVR4<br></br>
              VS2KP4GYLD5GMEXQ6WGH4UXFI6IKOSPPLGYMDHMR7JQCJ7ZAYUHVXHKFIU<br></br>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default FormView
