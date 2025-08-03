interface PageProps {
  children: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="min-h-screen pt-[env(safe-area-inset-top)] pr-[env(safe-area-inset-right)] pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)]">
      {children}
    </div>
  )
}
