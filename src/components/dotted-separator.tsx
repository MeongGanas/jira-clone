import { cn } from "@/lib/utils"

interface DottedSeparatorProps {
    className?: string
    color?: string
    height?: string
    dotSize?: string
    gapSize?: string
    direction?: "horizontal" | "vertical"
}

export default function DottedSeparator({
    className,
    color = '#d4d4d8',
    height = '2px',
    dotSize = '2px',
    gapSize = '6px',
    direction = 'horizontal'
}: DottedSeparatorProps) {
    const isHorizonntal = direction === 'horizontal'

    return (
        <div className={cn(isHorizonntal ? "w-full items-center flex" : "h-full flex-col items-center flex", className)}>
            <div className={isHorizonntal ? 'flex-grow' : 'flex-grow-0'} style={{
                width: isHorizonntal ? '100%' : height,
                height: isHorizonntal ? height : '100%',
                backgroundImage: `radial-gradient(circle, ${color} 25%, transparent 25%)`,
                backgroundSize: isHorizonntal ?
                    `${parseInt(dotSize) + parseInt(gapSize)}px ${height}` :
                    `${height} ${parseInt(dotSize) + parseInt(gapSize)}px`,
                backgroundRepeat: isHorizonntal ? 'repeat-x' : 'repeat-y',
                backgroundPosition: 'center'
            }} />
        </div>
    )
}