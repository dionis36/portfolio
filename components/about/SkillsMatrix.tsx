import React from "react";
import { LineChart, Code2, Server, Network } from "lucide-react";
import { skills } from "@/data/skills";

const skillIcons: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number }>> = {
  "skill-1": LineChart,
  "skill-2": Code2,
  "skill-3": Server,
  "skill-4": Network,
};

export default function SkillsMatrix() {
  return (
    <section>
      <div className="max-w-[960px] mx-auto px-6 py-12 sm:py-16 border-t border-border">
        <h2 className="text-2xl sm:text-[26px] font-medium leading-[1.38] text-primary mb-8">
          My Skills
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {skills.map((skill) => {
            const Icon = skillIcons[skill.id] || Code2;

            return (
              <div
                key={skill.id}
                className="bg-surface rounded-[20px] border border-border-subtle p-6 sm:p-7 shadow-[0_4px_16px_0_rgba(0,0,0,0.02)] flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-surface-subtle border border-border-subtle flex items-center justify-center text-primary mb-4">
                    <Icon className="w-5 h-5 text-primary" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-lg font-medium text-primary mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-sm text-muted leading-relaxed mb-6">
                    {skill.description}
                  </p>
                </div>

                {/* Tech Stack Badges (Text Only) */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-border-subtle">
                  {skill.badges.map((badge) => (
                    <span
                      key={badge}
                      className="text-xs font-medium text-secondary bg-surface-subtle border border-border-subtle rounded-md px-2.5 py-1"
                    >
                      {badge}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
