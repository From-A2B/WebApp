import type { ReactNode } from 'react';
import React from 'react';
import { ArrowRightIcon } from '@radix-ui/react-icons';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';

type BentoGridProps = {
  children: ReactNode;
  className?: string;
};

const BentoGrid: React.FC<BentoGridProps> = ({ children, className }) => {
  return (
    <div className={cn("grid w-full auto-rows-[22rem] grid-cols-3 gap-4", className)}>
      {children}
    </div>
  );
};

type BentoCardProps = {
  name: string;
  className?: string;
  Icon: React.ElementType;
  description: string;
  href: string;
  cta: string;
};

const BentoCard: React.FC<BentoCardProps> = ({ name, className, Icon, description, href, cta }) => {
  return (
    <div
      key={name}
      className={cn(
        "group relative col-span-3 flex flex-col justify-between overflow-hidden rounded-xl",
        "shadow-xl",
        className,
      )}
      style={{ background: 'light-dark(var(--mantine-color-white), var(--mantine-color-dark-6)' }}
    >
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-10">
        <Icon className={cn('h-12 w-12 origin-left transform-gpu transition-all duration-300 ease-in-out group-hover:scale-75')} />
        <h3 className="text-xl font-semibold">{name}</h3>
        <p className="max-w-lg">{description}</p>
      </div>

      <div className="pointer-events-none absolute bottom-0 flex w-full translate-y-10 transform-gpu flex-row items-center p-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <Button variant="ghost" asChild size="sm" className="pointer-events-auto">
          <a href={href}>
            {cta}
            <ArrowRightIcon className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
      <div className="pointer-events-none absolute inset-0 transform-gpu transition-all duration-300 group-hover:bg-black/[.03] group-hover:dark:bg-neutral-800/10" />
    </div>
  );
};

export { BentoCard, BentoGrid };
