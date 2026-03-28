import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { packages, getPackageById } from "@/data/packages";
import PackageDetailClient from "@/components/packages/PackageDetailClient";

interface Props {
  params: { id: string };
}

export async function generateStaticParams() {
  return packages.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const pkg = getPackageById(params.id);
  if (!pkg) return { title: "Package Not Found" };
  return {
    title: `${pkg.name} — ${pkg.duration} Days in Sri Lanka`,
    description: pkg.description,
  };
}

export default function PackagePage({ params }: Props) {
  const pkg = getPackageById(params.id);
  if (!pkg) notFound();
  return <PackageDetailClient pkg={pkg} />;
}
