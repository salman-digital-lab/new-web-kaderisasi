export default function BukuAktivis() {
  const dummyData = [
    {
      id: '1',
      kegiatan: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, consequuntur!',
      isCompleted: false,
    },
    {
      id: '2',
      kegiatan: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, consequuntur!',
      isCompleted: false,
    },
    {
      id: '3',
      kegiatan: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, consequuntur!',
      isCompleted: true,
    },
    {
      id: '4',
      kegiatan: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, consequuntur!',
      isCompleted: true,
    },
    {
      id: '5',
      kegiatan: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, consequuntur!',
      isCompleted: false,
    },
    {
      id: '6',
      kegiatan: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, consequuntur!',
      isCompleted: true,
    },
    {
      id: '7',
      kegiatan: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, consequuntur!',
      isCompleted: false,
    },
  ];

	return (
		<div className="bg-primary-100 rounded-lg">
			<h2 className="text-white font-bold p-4 bg-primary rounded-t-lg">
				Daftar Misi
			</h2>
      <div className="flex flex-col gap-2 p-4 pb-6 mt-2">
        {dummyData.map(({id, kegiatan, isCompleted}) => (
          <div key={id} className="flex gap-2 items-center p-2 bg-white rounded-md">
            <input type="checkbox" name="" id={id} disabled checked={isCompleted}/>
            <label htmlFor={id} className={isCompleted ? 'text-gray-500' : ''}>{kegiatan}</label>
          </div>
        ))}
      </div>
		</div>
	);
};
