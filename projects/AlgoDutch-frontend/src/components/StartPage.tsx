// import React, { useState } from 'react'
// import { useWallet } from '@txnlab/use-wallet'
// import ConnectWallet from './ConnectWallet'
// import Transact from './Transact'
// import AppCalls from './AppCalls'
// import Form from './Form'

// interface StartPageProps {}

// const StartPage: React.FC<StartPageProps> = () => {
//   const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
//   const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
//   const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
//   const { activeAddress } = useWallet()
//   const [popUpForm, setpopUpForm] = useState<boolean>(false)

//   const toggleWalletModal = () => {
//     setOpenWalletModal(!openWalletModal)
//   }

//   const toggleDemoModal = () => {
//     setOpenDemoModal(!openDemoModal)
//   }

//   const toggleAppCallsModal = () => {
//     setAppCallsDemoModal(!appCallsDemoModal)
//   }

//   const togglePopUpForm = () => {
//     setpopUpForm(!popUpForm)
//   }

//   return (
//     <div className="bg-cyan-100 min-h-screen min-w-screen ">
//       <div className=" container mx-auto fit">
//         <div className="flex items-center justify-between">
//           <img src="/images/3.svg" alt="Logo" className="h-56 " />
//           <button data-test-id="connect-wallet" className="btn" onClick={toggleWalletModal}>
//             Connect Wallet
//           </button>
//         </div>
//         <div className="flex mt-2">
//           {activeAddress && (
//             <>
//               <button data-test-id="transactions-demo" className="btn mx-2" onClick={toggleDemoModal}>
//                 Transactions Demo
//               </button>
//               <button data-test-id="appcalls-demo" className="btn mx-2" onClick={toggleAppCallsModal}>
//                 Contract Interactions Demo
//               </button>
//               <button data-test-id="create-expense" className="btn mx-2" onClick={togglePopUpForm}>
//                 Create Expense
//               </button>
//             </>
//           )}
//         </div>
//       </div>
//       <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
//       <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
//       <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
//       <Form />

//       <div className="container mx-auto px-4">
//         <div className="flex flex-col md:flex-row items-center">
//           <div>
//             <h1 className="text-7xl text-center mb-4 font-serif">
//               Welcome to <b>Dutch</b>
//             </h1>
//             <div className="flex">
//               <div className="md:w-auto p-4">
//                 <img src="/images/image1.png" alt="Project Image" className="object-left object-scale-down h-64 md:h-auto w-200px" />
//               </div>
//               <div className="md:w-auto p-4">
//                 <p className="text-3xl text-center font-serif font-thin">
//                   Dutch, <br></br>a platform for splitting expenses and managing finances seamlessly.<br></br> Join us to experience a new way of managing
//                   your expenses!
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default StartPage

import React, { useState } from 'react'
import { useWallet } from '@txnlab/use-wallet'
import ConnectWallet from './ConnectWallet'
import Transact from './Transact'
import AppCalls from './AppCalls'
// import Form from './Form'
// import ViewForm from './ViewForm'
import Form from './Form'

interface StartPageProps {}

const StartPage: React.FC<StartPageProps> = () => {
  const [openWalletModal, setOpenWalletModal] = useState<boolean>(false)
  const [openDemoModal, setOpenDemoModal] = useState<boolean>(false)
  const [appCallsDemoModal, setAppCallsDemoModal] = useState<boolean>(false)
  const { activeAddress } = useWallet()
  // const [popUpForm, setpopUpForm] = useState<boolean>(false)

  const toggleWalletModal = () => {
    setOpenWalletModal(!openWalletModal)
  }

  const toggleDemoModal = () => {
    setOpenDemoModal(!openDemoModal)
  }

  const toggleAppCallsModal = () => {
    setAppCallsDemoModal(!appCallsDemoModal)
  }

  // const togglePopUpForm = () => {
  //   setpopUpForm(!popUpForm)
  // }

  const [name, setName] = useState('')
  const [description, setDescription] = useState('')
  const [targetAmount, setTargetAmount] = useState('')
  const [members, setMembers] = useState('')
  const [showForm, setShowForm] = useState<boolean>(false)
  const [submitted, setSubmitted] = useState<boolean>(false)

  const handleView = () => {
    setShowForm(true)
    setSubmitted(false)
  }

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    alert('Expense submitted successfully!')
    // Clear form fields
    setName('')
    setDescription('')
    setTargetAmount('')
    setMembers('')
    setShowForm(false)
    setSubmitted(true)
  }

  return (
    <div className="bg-cyan-100 min-h-screen min-w-screen">
      <div className=" container mx-auto">
        <div className="flex items-center justify-between mx-auto">
          <img src="/images/3.svg" alt="Logo" className="h-56 " />
          <button data-test-id="connect-wallet" className="btn" onClick={toggleWalletModal}>
            Connect Wallet
          </button>
          <div>
            <Form />
          </div>
        </div>
        <div className="flex mt-2">
          {activeAddress && (
            <>
              <button data-test-id="transactions-demo" className="btn mx-2" onClick={toggleDemoModal}>
                Transactions Demo
              </button>
              <button data-test-id="appcalls-demo" className="btn mx-2" onClick={toggleAppCallsModal}>
                Contract Interactions Demo
              </button>
              {/* <button data-test-id="create-expense" className="btn mx-2" onClick={togglePopUpForm}>
                Create Expense
              </button> */}
              <div className="grid">
                {!showForm && !submitted && (
                  <button
                    className="btn mx-2  hover:bg-sky-700 hover:shadow-lg
                  focus:bg-sky-700 focus:shadow-lg focus:outline-none focus:ring-0
                  active:bg-sky-800 active:shadow-lg
                  transition
                  duration-150
                  ease-in-out"
                    data-bs-toggle="modal"
                    data-bs-target="#exampleModal"
                    onClick={() => setShowForm(true)}
                  >
                    Create Expense
                  </button>
                )}

                {showForm && !submitted && (
                  <form
                    onSubmit={handleFormSubmit}
                    className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
                    id="exampleModal"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div className="py-12">
                      <h2 className="text-2xl font-bold">Expense Form</h2>
                      <div className="mt-8 max-w-md">
                        <div className="grid grid-cols-1 gap-6">
                          <label className="block">
                            <span className="text-gray-700">Members</span>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              placeholder=""
                              value={members}
                              onChange={(e) => setMembers(e.target.value)}
                              required
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700">Description</span>
                            <input
                              type="text"
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              placeholder=""
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              required
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700">Target Amount</span>
                            <input
                              type="number"
                              value={targetAmount}
                              onChange={(e) => setTargetAmount(e.target.value)}
                              required
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                            />
                          </label>
                          <label className="block">
                            <span className="text-gray-700">Name</span>
                            <textarea
                              rows={3}
                              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                              value={name}
                              required
                              onChange={(e) => setName(e.target.value)}
                            ></textarea>
                          </label>
                        </div>
                      </div>
                    </div>

                    <button type="submit">Submit</button>
                  </form>
                )}
              </div>
            </>
          )}
          {submitted && <button onClick={handleView}>View Form</button>}
          <ConnectWallet openModal={openWalletModal} closeModal={toggleWalletModal} />
          <Transact openModal={openDemoModal} setModalState={setOpenDemoModal} />
          <AppCalls openModal={appCallsDemoModal} setModalState={setAppCallsDemoModal} />
        </div>
      </div>

      {/* {activeAddress && popUpForm && <Form />} */}

      <div className=" mx-auto mt-[-196px] w-full h-screen text-center flex flex-col justify-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className=" mx-auto">
            <h1 className="text-6xl text-center mb-4 font-serif px-4 md:pt-16">
              Welcome to <b>Dutch</b>
            </h1>
            <div className="flex bg-cyan-170 rounded-2xl p-8 md:p-0 white:bg-slate-800">
              <img src="/images/image1.png" alt="Project Image" className=" md:w-128 md:h-auto  h-372  mx-auto" />

              <div className="md:pt-48 md:p-8 text-center md:text-left space-y-4">
                <p className="text-4xl font-normal font-serif  text-center pt-5">
                  Expense splitting platform <br></br>and managing finances seamlessly.
                </p>
                <p className="md:text-2xl text-xl font-bold text-gray-500 pt-3">
                  Join us to experience a new way of managing your expenses!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StartPage
