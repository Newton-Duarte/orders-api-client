type ListHeaderProps = {
  title: string
  description?: string
}

export function ListHeader({ title, description, ...props }: ListHeaderProps) {
  return (
    <div className="space-y-1" {...props}>
      <h1 className="text-3xl font-bold">{title}</h1>
      {!!description && <p className="text-muted-foreground">{description}</p>}
    </div>
  )
}
