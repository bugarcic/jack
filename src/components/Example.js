import { useState } from 'react'
import { Tab } from '@headlessui/react'
import Dashboard from './Dashboard.js'
import TabHome from './TabHome.js'
import QB_Popup from './QB_Popup.js'
import TabAlerts from './TabAlerts.js'
import TabAccount from './TabAccount.js'

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function Example(props) {
  let [categories] = useState({
    Home: [
      {
        id: 1,
        title: 'Toyota Camry 2005',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "Derek Jeter Baseball Card",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    QueryManager: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Account: 
        [props.queries]
    ,
  })


  let testQueries = props.queries

  console.log("FROM EX" , props.queries)
  console.log("category", categories)
  return (
    <div className="w-full max-w-4xl px-2 py-12 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex p-1 space-x-1 bg-blue-400/50 rounded-xl">
          {/* {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-md leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              {category}
            </Tab>
          ))} */}

            <Tab className={({ selected }) =>
                    classNames(
                    'w-full py-2.5 text-md leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected
                        ? 'bg-white shadow'
                        : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                    )
                }>Query Manager</Tab>
            <Tab className={({ selected }) =>
                classNames(
                    'w-full py-2.5 text-md leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                    selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
                }>Alerts</Tab>
            <Tab className={({ selected }) =>
                classNames(
                  'w-full py-2.5 text-md leading-5 font-medium text-blue-700 rounded-lg',
                  'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60',
                  selected
                    ? 'bg-white shadow'
                    : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                )
              }>Account</Tab>

        </Tab.List>

        <Tab.Panels className="mt-2">
          {/* {Object.values(categories).map((posts, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames(
                'bg-white rounded-xl p-3 border-2',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}
            >
              <ul>
                <QB_Popup queries={props.queries} setQuery={props.setQuery}/>
                {posts.map((post) => (
                  <li
                    key={post.id}
                    className="relative p-3 rounded-md hover:bg-coolGray-100"
                  >
                    <h3 className="text-sm font-semibold leading-2">
                      {post.title}
                      {post.title}
                    </h3>

                    <ul className="flex mt-1 space-x-1 text-xs font-normal leading-4 text-coolGray-500 pd-0 !important">
                      <li>{post.date}</li>
                      <li>&middot;</li>
                      <li>{post.commentCount} Alerts</li>
                      <li>&middot;</li>
                      <li>{post.shareCount} Signals</li>
                      <li>&middot;</li>
                      <li>{post.keywords} TestKeywords</li>
                      {props.queries.length > 0 &&
                        props.queries.map((query, i) => {
                            //console.log(query)
                            return (<span>keywords {query.keywords[0] + " " + query.keywords[1] + " " + query.keywords[2]}</span>)
                        })}
                    </ul>

                    <a
                      href="#"
                      className={classNames(
                        'absolute inset-0 rounded-md',
                        'focus:z-10 focus:outline-none focus:ring-2 ring-blue-400'
                      )}
                    />
                  </li>
                ))}
              </ul>
            </Tab.Panel>
          ))} */}
          <Tab.Panel className={classNames(
                'bg-white rounded-xl p-3 border-2',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}>
              <QB_Popup queries={props.queries} setQuery={props.setQuery}/>
              <TabHome queries={props.queries}/>
          </Tab.Panel>
          <Tab.Panel className={classNames(
                'bg-white rounded-xl p-3 border-2',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}>
                  <TabAlerts />
          </Tab.Panel>
          <Tab.Panel className={classNames(
                'bg-white rounded-xl p-3 border-2',
                'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-blue-400 ring-white ring-opacity-60'
              )}>
                  <TabAccount />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}