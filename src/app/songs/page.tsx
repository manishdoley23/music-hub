import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function SongsPage() {
  return (
    <div className="h-screen w-full flex items-center justify-center">
      <Link href={`/songs/12312`}>
        <Card>
          <CardHeader>
            <CardTitle>Sweet child of mine</CardTitle>
          </CardHeader>
        </Card>
      </Link>
    </div>
  );
}
