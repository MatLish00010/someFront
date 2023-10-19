export default function Page(props: {params: {reportId: string}}) {
  return <h1>Report for {props.params.reportId}</h1>;
}

export async function generateStaticParams() {
  return [{reportId: 'FILE_2'}, {reportId: 'FILE_1'}];
}
