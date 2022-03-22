function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

const TabAccount = (props) => {
  //fetch all users queries from database and store them in state
  const user = {
    email: "test@test.com",
    password: "*********",
    dateCreated: "2/04/2022",
    plan: "Standard",
    queries: "52",
    alerts: "263"
  }


  return (
    <div>
      <div>
        <div className='border-b-2'>
          <div className="items-center p-3">
            <h3 className="text-m font-semibold leading-2">Your Account</h3>
            <span className="text-xs text-neutral-400">Manage your account settings and plan.</span>
            </div>
        </div>
        <div className="p-3">
          <h3 className="text-m font-semibold leading-2">Basic Information</h3>
          <div class="container mx-auto">
          <div className='border-b-2 border-slate-200'>
          <div class="flex items-stretch">
            <div class="py-4 flex-auto">
              <span className="text-s text-neutral-400">Email</span>
            </div>
            <div class="py-4  w-1/2">
              <span className="test-s font-medium	">{user.email}</span>
            </div>
            <div class="py-4 float-right">
              <button>
                <span className="test-s text-purple-600">Update</span>
              </button>
            </div>
          </div>
          </div>
          <div className='border-b-2 border-slate-200'>
          <div class="flex items-stretch">
            <div class="py-4 flex-auto">
              <span className="text-s text-neutral-400">Password</span>
            </div>
            <div class="py-4  w-1/2">
              <span className="test-s font-medium	">{user.password}</span>
            </div>
            <div class="py-4 float-right">
              <button>
                <span className="test-s text-purple-600">Update</span>
              </button>
            </div>
          </div>
          </div>
          <div className='border-b-2 border-slate-200'>
          <div class="flex items-stretch">
            <div class="py-4 flex-auto">
              <span className="text-s text-neutral-400">Member Since</span>
            </div>
            <div class="py-4  w-1/2">
              <span className="test-s font-medium	">{user.dateCreated}</span>
            </div>
            <div class="py-4 float-right">
              <button>
                <span className="test-s text-purple-100">Update</span>
              </button>
            </div>
          </div>
          </div>
          <div className='border-b-2 border-slate-200'>
          <div class="flex items-stretch">
            <div class="py-4 flex-auto">
              <span className="text-s text-neutral-400">Account Plan</span>
            </div>
            <div class="py-4  w-1/2">
              <span className="test-s font-medium	">{user.plan}</span>
            </div>
            <div class="py-4 float-right">
              <button>
                <span className="test-s text-purple-600">Upgrade</span>
              </button>
            </div>
          </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TabAccount;
