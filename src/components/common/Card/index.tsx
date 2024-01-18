import { Button } from "..";

export default function Card() {
    return (
    <div
      className='w-[300px] h-[400px] flex flex-col justify-between gap-4 border-2 bg-white cursor-default border-bmka-primary-blue rounded'
    >
      <div className='flex flex-col gap-4 p-2'>
          <img
              src="https://admin-api-kaderisasi.salmanitb.com/activity_pic/1704528106622.jpeg"
              alt='Activity Banner'
              className='w-full object-cover rounded'
          />
          <div className="flex pt-2">
            <p className='font-bold'>Webinar Presentasi ilmiah</p>
            <p className="text-small text-[#949597]">12/08/2023</p>
          </div>
      </div>
      <div className='flex flex-col gap-4'>
        <Button variant="secondary" typeBorder="card">Daftar</Button>
      </div>
    </div>
    )
}