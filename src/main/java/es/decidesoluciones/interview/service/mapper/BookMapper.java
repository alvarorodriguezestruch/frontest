package es.decidesoluciones.interview.service.mapper;

import es.decidesoluciones.interview.domain.*;
import es.decidesoluciones.interview.service.dto.BookDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Book and its DTO BookDTO.
 */
@Mapper(componentModel = "spring", uses = {AuthorMapper.class, CategoryMapper.class})
public interface BookMapper extends EntityMapper<BookDTO, Book> {

    @Mapping(source = "author.id", target = "authorId")
    @Mapping(source = "category.id", target = "categoryId")
    BookDTO toDto(Book book);

    @Mapping(source = "authorId", target = "author")
    @Mapping(source = "categoryId", target = "category")
    Book toEntity(BookDTO bookDTO);

    default Book fromId(Long id) {
        if (id == null) {
            return null;
        }
        Book book = new Book();
        book.setId(id);
        return book;
    }
}
