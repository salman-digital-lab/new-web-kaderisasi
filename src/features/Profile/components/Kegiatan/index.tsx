import Image from "next/image";
import { NotebookPen } from "lucide-react";
import { Button } from "@/components/common";
import placeholderPosterKegiatan from "@/assets/images/poster-kegiatan-placeholder.jpeg";
import { Input } from "@/components/form";
import { ActivityRegistration } from "@/types/model/user";
import Link from "next/link";

type ActivityProps = {
  activities: ActivityRegistration[];
};

export default function ActivityList({ activities }: ActivityProps) {
  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col justify-between items-center md:flex-row">
        <h1 className="text-xl font-bold mb-4">Daftar Kegiatan</h1>
        <form className="relative self-start md:w-72">
          <Input
            inputStyle="outlined-primary"
            type="text"
            placeholder="Cari kegiatan"
          />
        </form>
      </div>
      <div className="flex flex-col gap-6">
        {activities?.map((activity) => (
          <div
            key={activity.id}
            className="flex flex-col justify-between gap-4 p-4 border border-primary rounded-lg md:flex-row"
          >
            <div className="md:self-start md:w-1/4">
              <Image
                src={placeholderPosterKegiatan}
                alt="Poster kegiatan"
                className="w-full h-48 object-cover md:h-auto"
              />
            </div>

            <div className="flex flex-col gap-3 md:w-2/4">
              <h2 className="font-bold text-md">{activity.activity.name}</h2>
              <div className="flex justify-between items-center md:block">
                <p className="font-bold text-primary">Aktualisasi Diri</p>
              </div>
              <div className="md:mt-14">
                <Link href={"/kegiatan/" + activity.activity.slug}>
                  <Button
                    variant="secondary"
                    type="button"
                    className="w-full md:w-auto"
                  >
                    Lihat Detail
                  </Button>
                </Link>
              </div>
            </div>

            <div className="hidden md:flex md:justify-end md:items-end md:w-1/4">
              <p className="text-primary">{activity.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
