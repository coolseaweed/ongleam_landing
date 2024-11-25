import Image from "next/image";

interface Career {
  start: string;
  end: string;
  company: string;
  position: string;
  description: string;
  duration?: string;
  image?: string;
}

function CareerCard({ career }: { career: Career }) {
  return (
    <div className="flex w-full items-start justify-between rounded-xl px-0 sm:px-1">
      <div className="flex w-full flex-1 flex-row gap-4">
        <div className="flex flex-col items-center">
          <Image
            src={career.image ? career.image : "/shared/company.png"}
            alt="user_community_image"
            width={48}
            height={48}
            className="cursor-pointer rounded-full border-2"
          />
          <div className="w-0.5 grow rounded-full bg-gray-200 dark:bg-gray-600" />
        </div>

        <div className="flex w-full flex-col">
          <div className="flex flex-1 items-center gap-4">
            <h1 className="text-xl font-bold">{career.company}</h1>
            <p className="text-base">{career.position}</p>
          </div>

          <p>
            {career.start} - {career.end}{" "}
            {career.duration ? `・ ${career.duration}` : ""}
          </p>
          <p className="pb-8 pt-4">{career.description}</p>
        </div>
      </div>
    </div>
  );
}

export default CareerCard;
