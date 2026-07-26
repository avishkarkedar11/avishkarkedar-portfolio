import { education, educationStats } from "../../data/education";

import EducationHeader from "./EducationHeader";
import EducationTimeline from "./EducationTimeline";
import EducationStats from "./EducationStats";

export default function Education() {
  return (
    <section
      id="education"
      className="bg-gradient-to-b from-white via-slate-50 to-white py-24 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <EducationHeader />

        {/* Timeline */}
        <EducationTimeline education={education} />

        {/* Stats */}
        <EducationStats stats={educationStats} />
      </div>
    </section>
  );
}