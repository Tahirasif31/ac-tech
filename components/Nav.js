"use client";
import { Button } from "./ui/moving-borders";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";

function Nav() {
  const [active, setActive] = useState(null);
  return (
    <nav className="flex justify-center mt-4">
      <div className="w-[1340px] flex justify-between items-center text-center border-[1px] border-[#FFFFFF]/[0.16] px-4  rounded-lg">
        <span>Ac Tech</span>

        <div className={cn("max-w-2xl mx-auto z-50")}>
          <Menu setActive={setActive} className="text-white">
            <MenuItem setActive={setActive} active={active} item="Services">
              <div className="flex flex-col space-y-4 text-sm text-white">
                <HoveredLink href="/web-dev" className="text-white">
                  Web Development
                </HoveredLink>
                <HoveredLink href="/interface-design">
                  Interface Design
                </HoveredLink>
                <HoveredLink href="/seo">
                  Search Engine Optimization
                </HoveredLink>
                <HoveredLink href="/branding">Branding</HoveredLink>
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Products">
              <div className="  text-sm grid grid-cols-2 gap-10 p-4">
                <ProductItem
                  title="Algochurn"
                  href="https://algochurn.com"
                  src="https://assets.aceternity.com/demos/algochurn.webp"
                  description="Prepare for tech interviews like never before."
                />
                <ProductItem
                  title="Tailwind Master Kit"
                  href="https://tailwindmasterkit.com"
                  src="https://assets.aceternity.com/demos/tailwindmasterkit.webp"
                  description="Production ready Tailwind css components for your next project"
                />
                <ProductItem
                  title="Moonbeam"
                  href="https://gomoonbeam.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.51.31%E2%80%AFPM.png"
                  description="Never write from scratch again. Go from idea to blog in minutes."
                />
                <ProductItem
                  title="Rogue"
                  href="https://userogue.com"
                  src="https://assets.aceternity.com/demos/Screenshot+2024-02-21+at+11.47.07%E2%80%AFPM.png"
                  description="Respond to government RFPs, RFIs and RFQs 10x faster using AI"
                />
              </div>
            </MenuItem>
            <MenuItem setActive={setActive} active={active} item="Pricing">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/hobby">Hobby</HoveredLink>
                <HoveredLink href="/individual">Individual</HoveredLink>
                <HoveredLink href="/team">Team</HoveredLink>
                <HoveredLink href="/enterprise">Enterprise</HoveredLink>
              </div>
            </MenuItem>
          </Menu>
        </div>
        <Button
          borderRadius="1.75rem"
          className="dark:bg-slate-900 text-white dark:text-white border-neutral-200 dark:border-slate-800 px-1 py-3"
        >
          Login
        </Button>
      </div>
    </nav>
  );
}

export default Nav;
