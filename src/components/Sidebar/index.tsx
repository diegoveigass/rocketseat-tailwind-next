'use client'

import { Logo } from './Logo'
import {
  BarChart,
  CheckSquare,
  Flag,
  Home,
  Search,
  SquareStack,
  Users,
  Cog,
  LifeBuoy,
  Menu,
  Sun,
  Moon,
} from 'lucide-react'
import { NavItem } from './NavItem'
import { UsedSpaceWidget } from './UsedSpaceWidget'
import { Profile } from './Profile'
import * as Input from '../Input'
import * as Collapsible from '@radix-ui/react-collapsible'
import { Button } from '../Button'
import { useEffect, useState } from 'react'

export function Sidebar() {
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    if (localStorage.getItem('theme') === 'dark') {
      return 'dark'
    } else {
      return 'light'
    }
  })

  useEffect(() => {
    if (localStorage.getItem('theme') === 'dark') {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [theme])

  function handleToggleTheme() {
    if (theme === 'light') {
      setTheme('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      setTheme('light')
      localStorage.setItem('theme', 'light')
    }
  }

  return (
    <Collapsible.Root className="fixed left-0 right-0 top-0 z-20 flex flex-col gap-6 border-b border-zinc-200 bg-white p-4 data-[state=open]:bottom-0 dark:border-zinc-800 dark:bg-zinc-900 lg:right-auto lg:w-80 lg:border-r lg:px-5 lg:py-8 lg:data-[state=closed]:bottom-0">
      <div className="flex items-center justify-between">
        <Logo />

        <button
          onClick={handleToggleTheme}
          className="rounded-full p-2 hover:bg-zinc-100 dark:hover:bg-zinc-700"
        >
          {theme === 'light' ? (
            <Moon className="h-6 w-6 text-black" />
          ) : (
            <Sun className="h-6 w-6 text-yellow-400" />
          )}
        </button>

        <Collapsible.Trigger asChild className="lg:hidden">
          <Button variant="ghost">
            <Menu className="h-6 w-6" />
          </Button>
        </Collapsible.Trigger>
      </div>

      <Collapsible.Content
        forceMount
        className="flex flex-1 flex-col gap-6 data-[state=closed]:hidden lg:data-[state=closed]:flex"
      >
        <Input.Root>
          <Input.Prefix>
            <Search className="h-5 w-5 text-zinc-500" />
          </Input.Prefix>
          <Input.Control placeholder="Search" />
        </Input.Root>

        <nav className="space-y-0.5">
          <NavItem title="Home" icon={Home} />
          <NavItem title="Dashboard" icon={BarChart} />
          <NavItem title="Projects" icon={SquareStack} />
          <NavItem title="Tasks" icon={CheckSquare} />
          <NavItem title="Reporting" icon={Flag} />
          <NavItem title="Users" icon={Users} />
        </nav>

        <div className="mt-auto flex flex-col gap-6">
          <nav className="space-y-0.5">
            <NavItem title="Support" icon={LifeBuoy} />
            <NavItem title="Settings" icon={Cog} />
          </nav>

          <UsedSpaceWidget />

          <div className="h-px bg-zinc-200 dark:bg-zinc-700" />

          <Profile />
        </div>
      </Collapsible.Content>
    </Collapsible.Root>
  )
}
