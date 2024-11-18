import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

const Channel = () => {
  return (
    <main className="-mt-10 flex  space-x-2 lg:w-[1000px] w-full">
      <a href="/chanels" className="mx-10 flex ">
        <img src="/lena.jpeg" alt=""  className="w-12 h-12 rounded-[100%]"/>
        <div className="flex flex-col mx-2">
            <h2 className=" text-xl font-medium text-gray-200">Aloqador Nextjs</h2>
            <p className="text-xs font-medium text-gray-300">200 subscribers</p>
        </div>
      </a>
      {/* <div className="flex justify-between w-full"></div> */}
       <Button className="mx-10 mt-2 py-2 px-8 gap-1 bg-white/10 text-neutral-300 hover:bg-white/5">
            Subscripe <Bell />
        </Button>
        <div className=""></div>
    </main>
  );
};

export default Channel;
