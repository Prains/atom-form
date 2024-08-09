import { getSubmissions } from "@/lib/server-actions";
import { ExcelPage } from "@/components/views/excel-page";

export const revalidate = 0;

const Page = async () => {
  const data = await getSubmissions();

  return <ExcelPage data={data} />;
};

export default Page;
