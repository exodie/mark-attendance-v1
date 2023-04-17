import { FC } from "react";

// import { Footer } from "./footer/Footer.component";
import { InformationLessons } from "./information/Information.component";
import { GroupTable } from "./table/Table.component";

export const AllSectionComponent: FC = () => {
  return (
    <section className="section_component">
      <InformationLessons />
      <GroupTable />
      {/* <Footer /> */} {/** Not work */}
    </section>
  );
};
