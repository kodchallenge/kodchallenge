import { CaretSortIcon, CheckIcon } from '@kod/icons'
import { Button, Command, CommandGroup, CommandItem, Popover, PopoverContent, PopoverTrigger } from '@kod/ui'
import React, { useState } from 'react'

const LanguageSelect = () => {
    const [open, setOpen] = useState(false)

    return (
        <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
                <Button
                    size={"sm"}
                    variant="outline"
                    role="combobox"
                    aria-expanded={open}
                    className="w-[125px] border-slate-300 dark:border-slate-600 justify-between"
                >
                    {/* <span className="truncate">{language?.name}</span> */}
                    <span className="truncate">JavaScript</span>
                    <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
                <Command>
                    <CommandGroup>
                        {["C", "C++"].map((lang) => (
                            <CommandItem
                                key={lang}
                                onSelect={() => {
                                    setOpen(false)
                                }}
                            />
                        ))}
                        {/* {problem?.base_codes.map(code => (
                            <CommandItem
                                key={code.language.slug}
                                onSelect={() => {
                                    setLanguage(code.language)
                                    setOpen(false)
                                    localStorage.setItem(STORAGE_KEYS.CURRENT_EDITOR_LANGUAGE, code.language.slug)
                                }}
                            >
                                <CheckIcon
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        language?.id === code.language.id ? "opacity-100" : "opacity-0"
                                    )}
                                />
                                {code.language.name}
                            </CommandItem>
                        ))} */}
                    </CommandGroup>
                </Command>
            </PopoverContent>
        </Popover>
    )
}

export default LanguageSelect