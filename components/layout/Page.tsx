interface PageProps {
  children: React.ReactNode
}

export const Page = ({ children }: PageProps) => {
  return (
    <div className="min-h-screen pb-[env(safe-area-inset-bottom)] pl-[env(safe-area-inset-left)] pr-[env(safe-area-inset-right)] pt-[env(safe-area-inset-top)]">
      {children}
    </div>
  )
}
