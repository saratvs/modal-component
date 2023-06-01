import React, { useMemo } from "react";
import CountrySelect from "./components/CountrySelect";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import dynamic from "next/dynamic";

export default function MapComponent() {
  const {
    formState: { errors },
    setValue,
    watch,
  } = useForm<FieldValues>({
    defaultValues: {
      category: "",
      location: null,
      guestCount: 1,
      roomCount: 1,
      bathroomCount: 1,
      imageCrc: "",
      title: "",
      description: "",
    },
  });

  const location = watch("location");

  const setCustomValue = (id: string, value: any) => {
    setValue(id, value, {
      shouldValidate: true,
      shouldDirty: true,
      shouldTouch: true,
    });
  };
  const Map = useMemo(
    () => dynamic(() => import("./components/Map"), { ssr: false }),
    [location]
  );
  return (
    <div className="w-=[100vw] overflow-hidden flex flex-row justify-center items-center m-3">
      <div className="w-[45vw]">
        <CountrySelect
          value={location}
          onChange={(value) => setCustomValue("location", value)}
        />
        <Map center={location?.latlng} />
      </div>
    </div>
  );
}
