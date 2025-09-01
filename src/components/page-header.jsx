import { SidebarTrigger } from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export function PageHeader({ title, description, breadcrumbs, children }) {
    return (
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
            {/* <SidebarTrigger className="-ml-1" /> */}
            {/* <Separator orientation="vertical" className="mr-2 h-4" /> */}

            {breadcrumbs && (
                <>
                    <Breadcrumb>
                        <BreadcrumbList>
                            {breadcrumbs.map((crumb, index) => (
                                <div key={index} className="flex items-center gap-2">
                                    <BreadcrumbItem>
                                        {crumb.href ? (
                                            <BreadcrumbLink href={crumb.href}>{crumb.label}</BreadcrumbLink>
                                        ) : (
                                            <BreadcrumbPage>{crumb.label}</BreadcrumbPage>
                                        )}
                                    </BreadcrumbItem>
                                    {index < breadcrumbs.length - 1 && <BreadcrumbSeparator />}
                                </div>
                            ))}
                        </BreadcrumbList>
                    </Breadcrumb>
                    <Separator orientation="vertical" className="mx-2 h-4" />
                </>
            )}

            <div className="flex flex-1 items-center justify-between">
                <div>
                    <h1 className="text-lg font-semibold">{title}</h1>
                    {description && <p className="text-sm text-muted-foreground">{description}</p>}
                </div>
                {children && <div className="flex items-center gap-2">{children}</div>}
            </div>
        </header>
    )
}
