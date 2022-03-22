import SwitchTest from './SwitchTest.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabHome = (props) => {
  //fetch all users queries from database and store them in state
  let queries = props.queries

  return (
    <div>
         
        {queries.length === 0 && <span className="pl-4 text-sm text-neutral-400	">No queries to show! Create a new query to get started.</span>}
        {queries.length > 0 && <span className="pl-4 text-xs text-neutral-400	">Click on a Query to view/edit it.</span>}
            <ul>
                {queries.map((query) => (
                <div className='flex items-center	'>
                  <li
                    key={query.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-semibold leading-2">
                      {query.title}
                      {query.keywords[0] + " " + query.keywords[1] + " " + query.keywords[2] }
                    </h3>

                    <ul className="flex items-center mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500 pd-0 !important">
                      <li className="bg-green-200 p-1.5 rounded-lg">{query.price} Price</li>
                      {/* <li>&middot;</li> */}
                      <li className="bg-orange-200 p-1.5 rounded-lg">{query.alerts} Alerts</li>
                      <li>&middot;</li>
                      <li className="pl-1">{query.date}1/5/2022</li>
                    </ul>
                  </li>
                  <div className='flex items-center ml-auto pr-3'>
                    <div className='flex'>
                        <div className='pr-4'>
                        <FontAwesomeIcon icon={faTrash} color={'lightgrey'} size="s"/>
                        </div>
                        <div className='pr-4'>
                        <FontAwesomeIcon icon={faPen} color={'lightgrey'} size="s"/>
                        </div>
                        <SwitchTest/>
                    </div>

                  </div>
                </div>   
                ))}
                
              </ul>
    </div>
  );
}

export default TabHome;
