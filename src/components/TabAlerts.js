import Select from 'react-select';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import { faPen } from '@fortawesome/free-solid-svg-icons'

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabAlerts = (props) => {
  //fetch all users queries from database and store them in state

  //temp placeholder data
  let alerts = [
    {
      title: "Toyota Camry 2005",
      price: "$5400",
      image: "https://pictures.dealer.com/t/toyotascionoforange/0603/36fc64f0a8a6f61810a5b63561376aa7x.jpg",
      link: "https://www.google.com/",
      platform: "Facebook",
      date: "2/10/2022",
      new: true
    },
    {
      title: "Suzuki GSXR 2004",
      price: "$2500",
      image: "https://i.ytimg.com/vi/G_6as53oI0E/maxresdefault.jpg",
      link: "https://www.google.com/",
      platform: "Craigslist",
      date: "2/10/2022",
      new: false
    },
    {
      title: "Derek Jeter Signed Ball",
      price: "$350",
      image: "https://i.pinimg.com/564x/22/d4/1f/22d41f2b5e640d1fe43bc36008b97c20.jpg",
      link: "https://www.google.com/",
      platform: "eBay",
      date: "2/4/2022",
      new: false
    }
  ]

  const filterItems = [
    { label: "Most Recent", value: 355 },
    { label: "By Query", value: 54 },
    { label: "Oldest First", value: 43 },
  ];


  return (
    <div>
      <div>
        <div className='border-b-2'>
          <div className=" flex items-center p-3">
            <div>
            <h3 className="text-m font-semibold leading-2">Alerts</h3>
            <span className="text-xs text-neutral-400">Manage and monitor your Alerts in real-time</span>
            </div>
            <div className='ml-auto'>
              <Select options={filterItems} placeholder="Most Recent" />
            </div>
          </div>
        </div>
        {alerts.map((alert) => (
          <div className='flex items-center	pl-2'>
          <div className=''>
          <img
          className="object-cover	overflow-hidden h-10 w-10 rounded-full ring-2 ring-white  "
          src={alert.image}
          alt=""
          />

          </div>
          <li
            key={alert.id}
            className="relative p-3 rounded-md hover:bg-coolGray-100 list-none	"
          >
            <div className='flex items-center'>
              <a href={alert.link} target="_blank">
              <h3 className="text-sm font-semibold leading-2">
                {alert.title}
              </h3>
              
              </a>
              {/* {alert.new === true &&
              <div className='flex pl-2 pb-1'>
                  <li>&middot;</li>
                  <li className="bg-purple-400 p-1 rounded-md text-white text-xs">New</li>
              </div>
              } */}
            </div>

            <ul className="flex items-center mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500 pd-0 !important">
              <li className="bg-green-200 p-1.5 rounded-lg">{alert.price} Price</li>
            
              <li>&middot;</li>
              <li className="pl-1">{alert.date}</li>
              {alert.new === true &&
              <div className='flex items-center'>
                  <li>&middot;</li>
                  <div className='pl-2'>
                  <li className="bg-purple-400 p-1 rounded-md text-white">New Listing</li>

                  </div>
              </div>
              }

            </ul>
          </li>
          <div className='flex items-center ml-auto pr-3'>
            <div className='flex'>
                <div className='pr-4'>
                <FontAwesomeIcon icon={faTrash} color={'lightgrey'} size="s"/>
                </div>
            </div>

          </div>
        </div>   
        ))}
        
      </div>
    </div>
  );
}

export default TabAlerts;
