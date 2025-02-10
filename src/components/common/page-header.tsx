interface PageHeaderProps {
  title: string;
}

export default function PageHeader({ title }: PageHeaderProps) {

  return (
    <h1 className="text-3xl font-bold text-center mb-8 text-black">{title}</h1>
  );
} 