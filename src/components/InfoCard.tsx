interface InfoCardProps {
    color: string;
    children: React.ReactNode;
}

const InfoCard = ({color, children }: InfoCardProps) => {
    return (
        <div className={`bg-${color}-100 p-3 rounded-lg`}>
            {children}
        </div>
    )
}

export default InfoCard