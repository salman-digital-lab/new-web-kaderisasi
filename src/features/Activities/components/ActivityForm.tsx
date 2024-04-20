"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/common";
import { Input } from "@/components/form";
import Select from "@/components/form/Select";
import { QuestionnaireSchema } from "@/types/model/activity";
import Link from "next/link";
import { toast } from "sonner";
import registerActivity from "../actions/registerActivity";
import SubmitButton from "@/components/form/SubmitButton";
import { NotifyUser } from "@/functions/notification";

type ActivityFormProps = {
  formSchemas: QuestionnaireSchema[];
  slug: string;
};

const RenderForm = (schema: QuestionnaireSchema) => {
  switch (schema.type) {
    case "text":
      return (
        <div key={schema.name} className="flex flex-col gap-2">
          <label htmlFor={schema.name} className="text-white font-bold">
            {schema.label}
          </label>
          <Input
            id={schema.name}
            name={schema.name}
            inputStyle="outlined-primary"
            placeholder="Enter your answer here"
            required={schema.required}
          />
        </div>
      );

    case "number":
      return (
        <div key={schema.name} className="flex flex-col gap-2">
          <label htmlFor={schema.name} className="text-white font-bold">
            {schema.label}
          </label>
          <Input
            id={schema.name}
            name={schema.name}
            type="number"
            inputStyle="outlined-primary"
            placeholder="Enter your answer here"
            required={schema.required}
          />
        </div>
      );

    case "dropdown":
      return (
        <div key={schema.name} className="flex flex-col gap-2">
          <label htmlFor={schema.name} className="text-white font-bold">
            {schema.label}
          </label>
          <Select
            id={schema.name}
            name={schema.name}
            inputStyle="outlined-primary"
            placeholder="Enter your answer here"
            options={schema.data}
            required={schema.required}
          />
        </div>
      );

    default:
      return null;
  }
};

export default function ActivityForm({ formSchemas, slug }: ActivityFormProps) {
  const [canSubmit, setCanSubmit] = useState(false);
  const router = useRouter();

  const registerUserToActivity = async (formData: FormData) => {
    try {
      const respData = await registerActivity(formData, formSchemas, slug);
      if (respData) {
        NotifyUser("SUCCESS", respData.message);
        router.push("/program");
      }
    } catch (error) {
      if (error instanceof Error) NotifyUser("ERROR", error?.message);
    }
  };

  return (
    <form action={registerUserToActivity}>
      <div className="flex-col gap-6 flex">
        {formSchemas?.map((schema) => RenderForm(schema))}

        <div className="flex gap-2 items-baseline justify-center">
          <input
            onChange={() => setCanSubmit((prev) => !prev)}
            type="checkbox"
            checked={canSubmit}
            id="vehicle1"
            name="vehicle1"
            value="Bike"
          />
          <label className="text-white" htmlFor="vehicle1">
            I have filled out all forms properly and correctly
          </label>
        </div>

        <div className="flex gap-4 justify-center">
          <Link className="w-fit" href={"/program/register/" + slug + "/first"}>
            <Button variant="secondary" type="button">
              Back
            </Button>
          </Link>
          <SubmitButton disabled={!canSubmit} variant="secondary" type="submit">
            Register
          </SubmitButton>
        </div>
      </div>
    </form>
  );
}
