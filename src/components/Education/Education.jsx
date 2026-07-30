import { education } from "../../data/education";

import EducationHeader from "./EducationHeader";
import EducationTimeline from "./EducationTimeline";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-white dark:bg-slate-950 py-16 sm:py-20 transition-colors duration-300"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <EducationHeader />

        {/* Timeline */}
        <EducationTimeline education={education} />
      </div>
    </section>
  );
}