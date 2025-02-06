import { IoArrowUpOutline, IoArrowDownOutline } from "react-icons/io5";

export default function TransactionsTable() {
  return (
    <div className="p-7 rounded-lg overflow-x-auto bg-[#EDF0F7]">
      <h2 className="text-xl font-semibold text-[#343C6A] mb-4">
        Recent Transactions
      </h2>

      {/* Tabs */}
      <div className="flex gap-4 md:gap-8 border-b border-gray-200 mb-6 overflow-x-auto">
        <button className="text-[#1814F3] border-b-2 border-[#1814F3] pb-2 px-2 md:px-1">
          All Transactions
        </button>
        <button className="text-[#718EBF] hover:text-[#718EBF] pb-2 px-2 md:px-1">
          Income
        </button>
        <button className="text-[#718EBF] hover:text-[#718EBF] pb-2 px-2 md:px-1">
          Expense
        </button>
      </div>

      {/* Table */}
      <div className="w-full overflow-x-auto bg-white  px-7 brounded-3xl">
        <div className="hidden md:grid grid-cols-7 gap-4  text-base text-[#718EBF] font-medium border-b-[1px] border-[#E6EFF5] pt-6 pb-2">
          <div className="">Description</div>
          <div>Transaction ID</div>
          <div>Type</div>
          <div>Card</div>
          <div>Date</div>
          <div>Amount</div>
          <div>Receipt</div>
        </div>

        {/* Table Body */}
        <div className="space-y-2 ">
          {[
            {
              desc: "Spotify Sub....",
              type: "Shopping",
              amount: "-$2,500",
              color: "text-red-500",
              icon: (
                <div className="inline-flex items-center justify-center  w-7 h-7 rounded-full border border-[#718EBF]">
                  <IoArrowUpOutline
                    className="w-4 h-4 text-gray-600"
                    color="#718EBF"
                  />
                  <span className="sr-only">Outgoing transaction</span>
                </div>
              ),
            },
            {
              desc: "Freepik Sales",
              type: "Transfer",
              amount: "+$750",
              color: "text-green-500",
              icon: (
                <div className="inline-flex items-center justify-center   w-7 h-7 rounded-full border border-[#718EBF]">
                  <IoArrowUpOutline
                    className="w-4 h-4 text-gray-600"
                    color="#718EBF"
                  />
                  <span className="sr-only">Outgoing transaction</span>
                </div>
              ),
            },
            {
              desc: "Mobile Service",
              type: "Service",
              amount: "-$150",
              color: "text-red-500",
              icon: (
                <div className="inline-flex items-center justify-center  w-7 h-7 rounded-full border border-[#718EBF]">
                  <IoArrowUpOutline
                    color="#718EBF"
                    className="w-4 h-4 text-gray-600"
                  />
                  <span className="sr-only">Outgoing transaction</span>
                </div>
              ),
            },
            {
              desc: "Wilson",
              type: "Transfer",
              amount: "-$1050",
              color: "text-red-500",
              icon: (
                <div className="inline-flex items-center justify-center  w-7 h-7 rounded-full border border-[#718EBF]">
                  <IoArrowUpOutline
                    className="w-4 h-4 text-gray-600"
                    color="#718EBF"
                  />
                  <span className="sr-only">Outgoing transaction</span>
                </div>
              ),
            },
            {
              desc: "Emilly",
              type: "Transfer",
              amount: "+$840",
              color: "text-green-500",
              icon: (
                <div className="inline-flex items-center justify-center   w-7 h-7 rounded-full border border-[#718EBF]">
                  <IoArrowUpOutline
                    className="w-4 h-4 text-gray-600"
                    color="#718EBF"
                  />
                  <span className="sr-only">Outgoing transaction</span>
                </div>
              ),
            },
          ].map((item, index) => (
            <div
              key={index}
              className="grid md:grid-cols-7 grid-cols-2 gap-4  py-3 bg-white rounded-lg items-center border-b-[1px] border-[#F2F4F7]"
            >
              <div className="flex items-center gap-2 col-span-2 md:col-span-1 text-base">
              <div className="flex-2">
              {item.icon}
              </div>
                
                <span className="flex-1">{item.desc}</span>
              </div>
              <div className="text-gray-500 hidden md:block text-base ">
                #12548796
              </div>
              <div className="text-base">{item.type}</div>
              <div className="hidden md:block text-base">1234 ****</div>
              <div className="hidden md:block text-base">28 Jan, 12:30 AM</div>
              <div className={item.color}>{item.amount}</div>
              <button className="text-[#123288] border border-[#123288] rounded-full px-4 py-1 text-sm">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-center md:justify-end gap-2 mt-6">
        <button className="text-[#1814F3] px-3 py-2 hover:bg-blue-50 rounded-lg">
          Previous
        </button>
        <button className="bg-[#1814F3] text-white px-3 py-2 rounded-lg">
          1
        </button>
        <button className="text-[#1814F3] py-2 rounded-lg">2</button>
        <button className="text-[#1814F3] px-3 py-2  rounded-lg">3</button>
        <button className="text-[#1814F3] px-3 py-2  rounded-lg">4</button>
        <button className="text-[#1814F3] px-3 py-2  rounded-lg">Next</button>
      </div>
    </div>
  );
}
