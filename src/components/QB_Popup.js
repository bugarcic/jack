import QueryBuilder from './QueryBuilder.js'
import Example from './Example.js'
import { Dialog, Transition } from "@headlessui/react";
import { cx, XIcon } from "@vechaiui/react";
import { useState, useRef } from 'react';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const QB_Popup = (props) => {

  //fetch all users queries from database and store them in state
  //const [queries, setQueries] = useState([])
  //fetch all query results from database as well
  const [showDialog, setShowDialog] = useState(false);
  const completeButtonRef = useRef(null);

  const handleOpen = () => setShowDialog(true);
  const handleClose = () => setShowDialog(false);


  return (
      <div className="p-3">
      <button class="query-create-btn" onClick={handleOpen}>
         
          <div className='plus-wrap'>
            New Query
            <div className='qb-plus'>
                <FontAwesomeIcon icon={faPlusCircle} color={'white'} />
            </div>
          </div> 
        </button>
      <faPlusCircle />
      <Transition show={showDialog}>
        <Dialog
          initialFocus={completeButtonRef}
          as="div"
          className="fixed inset-0 overflow-y-auto z-modal"
          open={showDialog}
          onClose={handleClose}
        >
          <Dialog.Overlay className="fixed top-0 left-0 w-screen h-screen bg-blackAlpha-600" />
          <Transition.Child
            enter="transition ease-out duration-150"
            enterFrom="transform scale-95"
            enterTo="transform scale-100"
            leave="transition ease-in duration-100"
            leaveFrom="transform scale-100"
            leaveTo="transform scale-95"
          >
            <div
              className={cx(
                "relative flex flex-col w-full mx-auto my-24 rounded shadow-lg",
                "bg-white border border-gray-200",
                "dark:bg-neutral-800 dark:border-neutral-700",
                "max-w-3xl",
                "pb-3"
              )}
            >
              <header
                className="relative px-6 pt-5 text-lg font-semibold"
              >
                Query Builder
              </header>
              <button
                onClick={handleClose}
                className={cx(
                  "absolute text-sm cursor-base text-gray-600 dark:text-gray-400 hover:text-primary-500 top-4 right-4"
                )}
              >
                <XIcon className="w-4 h-4" />
              </button>
              <div className="flex-1 px-6">
              <QueryBuilder queries={props.queries} setQuery={props.setQuery} handleClose={handleClose}/>
              </div>
            </div>
          </Transition.Child>
        </Dialog>
      </Transition>
    </div>
  );
}

export default QB_Popup;
