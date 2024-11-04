import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card'
import { FormEvent, useState } from 'react'
import { Input } from './components/ui/input'
import { Button } from './components/ui/button'
import { Label } from './components/ui/label'
import { Avatar, AvatarFallback, AvatarImage } from './components/ui/avatar'
import avatar from './assets/avatar.jpg'

type AppProps = {
  name: string
  title: string
  numberC: string
}

function App() {
  const [student, setStudent] = useState<AppProps>({} as AppProps)
  const [hasCard, setHasCard] = useState<boolean>(true)
  const [name, setName] = useState('')

  function gerarNumeroAleatorioCincoDigitos(): number {
    return Math.floor(10000 + Math.random() * 90000)
  }

  function handleForm(event: FormEvent<HTMLFormElement>) {
    let title = 'Aluno'
    event.preventDefault()
    if (name.trim().toLocaleLowerCase() === 'patrícia') {
      title = 'Professor'
    }
    const nummber = '24' + String(gerarNumeroAleatorioCincoDigitos())
    const student = {
      name: name,
      title: title,
      numberC: nummber
    }
    setStudent(student)
    setHasCard(false)
  }

  return (
    <>
      <div className="flex items-center justify-center h-screen bg-stone-700 text-white">
        {hasCard === false ? (
          <Card className="bg-defaultCard h-customLarge w-80">
            <CardHeader>
              <div className="flex flex-row justify-between">
                <CardDescription>Cracha</CardDescription>
                <CardDescription>N° {student.numberC}</CardDescription>
              </div>
              <div className="flex items-center justify-center">
                <Avatar className="rounded-full w-24 h-24">
                  <AvatarImage src={avatar} alt="@shadcn" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
              </div>
              <h1 className="flex justify-center items-center text-slate-500 text-base">
                {' '}
                {student.title}
              </h1>
              <CardTitle className="text-center">{student.name}</CardTitle>
            </CardHeader>
            <CardContent className="mt-10">
              <hr className="border-t border-white" />
              <div className="mt-4">
                <div className="flex justify-between">
                  <p>QUANDO</p>
                  <p>28/10 a 01/11</p>
                </div>
              </div>

              {/* 2 Informação */}
              <hr className="border-t border-white mt-4" />
              <div className="mt-4">
                <div className="flex justify-between">
                  <p>ONDE</p>
                  <p>
                    Bloco G(Anfiteatro) e <br />
                    Bloco E
                  </p>
                </div>
              </div>

              {/* 3 Informação */}
              {student.name.trim().toLocaleLowerCase() !== 'patrícia' && (
                <>
                  <hr className="border-t border-white mt-4" />
                  <div className="mt-4">
                    <div className="">
                      <p>
                        Se participar de todos os dias irá ganhar{' '}
                        <strong>1 ponto extra</strong> na Avalição integrada
                      </p>
                    </div>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        ) : (
          <>
            <div>
              <form
                className="flex flex-col gap-2"
                onSubmit={(e) => handleForm(e)}
              >
                <Label>Nome*: </Label>
                <Input
                  className="text-black"
                  onChange={(e) => setName(e.target.value)}
                />
                <Button>Gerar Cracha</Button>
              </form>
            </div>
          </>
        )}
      </div>
    </>
  )
}

export default App
