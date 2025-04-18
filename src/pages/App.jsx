
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Sparkles, Smile, HeartHandshake, Users, Image as ImageIcon } from "lucide-react";
import { useState } from "react";

/* ... (conteúdo do App.jsx conforme canvas atual) ... */
export default function InspireAppMockup() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      user: "@laisson",
      image: "/motivational-post.jpg",
      text: "Acredite no seu potencial todos os dias!",
      likes: 12,
      comments: [
        { id: 1, user: "@ana", text: "Incrível! Era o que eu precisava ler hoje." },
      ],
    },
  ]);

  return (
    <div className="p-4 bg-gradient-to-b from-[#F0F4FF] to-[#FAFAFA] min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-6 text-[#5D3FD3]">Inspire Plus</h1>

      <Tabs defaultValue="feed" className="w-full max-w-4xl mx-auto mt-6">
        <TabsList className="grid w-full grid-cols-5">
          <TabsTrigger value="feed"><ImageIcon className="inline mr-2" />Feed</TabsTrigger>
          <TabsTrigger value="videos"><Sparkles className="inline mr-2" />Vídeos</TabsTrigger>
          <TabsTrigger value="diario"><Smile className="inline mr-2" />Diário</TabsTrigger>
          <TabsTrigger value="comunidade"><Users className="inline mr-2" />Comunidade</TabsTrigger>
          <TabsTrigger value="apoio"><HeartHandshake className="inline mr-2" />Apoio</TabsTrigger>
        </TabsList>

        <TabsContent value="feed">
          <div className="space-y-6 mt-6">
            {posts.map((post) => (
              <Card key={post.id} className="bg-white shadow-sm rounded-xl">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-2">
                    <p className="text-sm font-semibold">{post.user}</p>
                    <span className="text-xs text-gray-500">#Motivação</span>
                  </div>
                  <img
                    src={post.image}
                    alt="Motivational"
                    className="w-full h-60 object-cover rounded-lg mb-3 border border-gray-200"
                    onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/600x300.png?text=Imagem+Indispon%C3%ADvel")}
                  />
                  <p className="text-base text-gray-700 mb-2">{post.text}</p>
                  <div className="flex gap-4 text-sm text-gray-600">
                    <span>❤️ {post.likes}</span>
                    <span>💬 {post.comments.length}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="videos">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
            {[1, 2, 3, 4].map((_, i) => (
              <Card key={i}>
                <CardContent className="p-0">
                  <video className="w-full rounded-t-xl" controls>
                    <source src="/motivation.mp4" type="video/mp4" />
                    Seu navegador não suporta vídeo HTML5.
                  </video>
                  <div className="p-3">
                    <p className="font-medium">Mensagem Inspiradora #{i + 1}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="diario">
          <Card className="mt-4">
            <CardContent className="p-4 space-y-3">
              <h2 className="text-2xl font-semibold">Como está seu dia?</h2>
              <Textarea placeholder="Compartilhe seus sentimentos, metas ou conquistas..." />
              <Input type="file" />
              <Button className="mt-2">Postar</Button>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="comunidade">
          <div className="mt-4 space-y-4">
            {[
              "Empreendedores",
              "Estudantes",
              "Desenvolvimento Pessoal",
              "Espiritualidade",
              "Saúde Mental",
            ].map((grupo, i) => (
              <Card key={i}>
                <CardContent className="p-4">
                  <h3 className="text-xl font-semibold">Grupo: {grupo}</h3>
                  <p className="text-sm text-gray-500">Compartilhe, interaja e receba apoio</p>
                  <Button variant="outline" className="mt-2">Entrar</Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="apoio">
          <div className="mt-4">
            <Card>
              <CardContent className="p-4 text-center">
                <h2 className="text-2xl font-bold">Você não está sozinho</h2>
                <p className="text-sm text-gray-600">Encontre apoio emocional e mensagens positivas personalizadas</p>
                <Button className="mt-3">Receber Mensagem</Button>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
