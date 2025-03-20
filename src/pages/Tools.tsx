import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

type ToolsList = {
  name: string
  list: string[]
}

const list: ToolsList[] =[ {
  name: 'Software',
  list: [
    'VSCode',
    'Neovim',
    'IntelliJ IDEA',
    'Windows Terminal',
    'Ghostty',
  ]
},
{
  name: 'Hardware',
  list: [
    'Logitech MX 3 Master',
    'Keychron V4 Max',
    'Focusrite 2i2 2nd Gen',
    'Audiotechnica AT2020'
  ]
}]

const ToolComponent = ({ tool }: { tool: string }) => {
  return (
    <Badge variant={'secondary'} className="w-fit">{tool}</Badge>
  );
};

const CardComponent = ({ toolList }: { toolList: ToolsList }) => {
  return(
    <Card className="mb-6">
    <CardHeader>
      <CardTitle>{toolList.name}</CardTitle>
    </CardHeader>
    <CardContent className="flex flex-col gap-4 mt-2">
      {toolList.list.map((tool: string) => (
        <ToolComponent tool={tool} />
      ))}
    </CardContent>
  </Card>
  )
}

export const Tools = () => {
  return (
    <>
      <div className="mx-6 my-16">
        <div className="my-6">
          <Button asChild>
            <Link to={"/"} className="flex gap-2">
              <ArrowLeft size={13} />
              Back
            </Link>
          </Button>
          <div className="my-8 flex flex-col gap-2">
            <h1 className="text-2xl">Tools</h1>
            <p>Hardware and software I currently use</p>
            <p>You can check my dotfiles <Link to={'https://github.com/cammarb/dotfiles'} className="underline underline-offset-4 font-bold">here</Link></p>
          </div>
        </div>
        <main>
          {list.map((list)=>(
            <CardComponent toolList={list}/>
          ))
          }
        </main>
      </div>
    </>
  );
};
