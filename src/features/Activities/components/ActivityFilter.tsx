"use client";

import { Button } from "@/components/common";
import { Input } from "@/components/form";
import Select from "@/components/form/Select";
import { ACTIVITY_CATEGORY_ENUM } from "@/constants/enum/activity";
import { ACTIVITY_CATEGORY_OPTIONS } from "@/constants/form/activity";
import { useIsClient } from "@/hooks";
import { useSearchParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function ActivityFilter() {
  const [search, setSearch] = useState("");
  const isClient = useIsClient();
  const router = useRouter();

  const searchParams = useSearchParams();

  const onChangeCategory = (category?: ACTIVITY_CATEGORY_ENUM) => {
    const params = new URLSearchParams(searchParams.toString());

    if (category !== undefined) {
      params.set("catergory", String(category));
    } else {
      params.delete("catergory");
    }
    router.push("/kegiatan?" + params, { scroll: false });
  };

  useEffect(() => {
    const params = new URLSearchParams(searchParams.toString());
    if (search !== "") {
      params.set("search", String(search));
    } else {
      params.delete("search");
    }

    router.push("/kegiatan?" + params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [search]);

  return (
    <div className="flex flex-col gap-5 w-full px-5 pt-12 max-w-6xl mx-auto md:px-6">
      <Input
        placeholder="Cari Kegiatan"
        inputStyle="outlined-primary"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <div className="gap-3 hidden justify-center flex-wrap md:flex">
        <Button onClick={() => onChangeCategory()}>Semua</Button>
        {ACTIVITY_CATEGORY_OPTIONS.map((option) => (
          <Button
            key={option.value}
            onClick={() => onChangeCategory(option.value)}
          >
            {option.label}
          </Button>
        ))}
      </div>
      {isClient ? (
        <Select
          inputStyle="outlined-primary"
          className="md:hidden"
          placeholder="Pilih Kategori"
          isClearable
          onChange={(newValue) => {
            console.log(newValue);
            if (newValue && typeof newValue === "object" && "value" in newValue)
              onChangeCategory(newValue.value as ACTIVITY_CATEGORY_ENUM);

            if (newValue === null) onChangeCategory();
          }}
          options={ACTIVITY_CATEGORY_OPTIONS}
        />
      ) : undefined}
    </div>
  );
}
